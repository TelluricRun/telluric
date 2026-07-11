export interface CustomDomain {
  hostname: string; // e.g. app.example.com
  targetUrl: string; // where it maps, e.g. https://portal0.run/slug
  verified?: boolean;
}

const HOST_REGEX = /^(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z]{2,}$/i;

export const isValidHostname = (host: string): boolean => {
  if (!host) return false;
  // basic check for hostnames and subdomains
  return HOST_REGEX.test(host.trim());
};

export const normalizeHostname = (host: string): string => {
  return host.trim().toLowerCase();
};

export const buildCustomDomainMapping = (domain: CustomDomain) => {
  const hostname = normalizeHostname(domain.hostname);
  return {
    hostname,
    target: domain.targetUrl,
    verified: !!domain.verified,
  };
};

export const prepareDnsInstructions = (hostname: string, target: string) => {
  // Instruct user to create CNAME/A records depending on apex vs subdomain
  const isApex = hostname.split('.').length === 2;
  if (isApex) {
    return {
      type: 'A',
      instructions: `Create an A record for ${hostname} pointing to the provider IPs or use ALIAS/ANAME depending on the DNS provider. Point to ${target}`,
    };
  }

  return {
    type: 'CNAME',
    instructions: `Create a CNAME for ${hostname} pointing to ${target}. Depending on CDN, you may need to add additional verification records.`,
  };
};
