type SocialMedia = {
  facebook: string;
  instagram: string;
  twitter: string;
};

type Color = {
  primary_color: string;
  secondary_color: string;
  alternate_color: string;
  gradient_color: string[];
};

type MerchantData = {
  id: number;
  code: string;
  name: string;
  qa: string;
  footer_contact: string;
  website: string;
  redirect_url: string;
  logo: string;
  favicon: string;
  metadata: string;
  color: Color;
  toggle_info: string;
  is_active: boolean;
  social_media: SocialMedia;
  created_at: string;
  updated_at: string;
};
