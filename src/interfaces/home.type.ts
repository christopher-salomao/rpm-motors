export interface HomeProps {
  object: {
    slug: string;
    title: string;
    metadata: {
      banner: {
        url: string;
        imgix_url: string;
      };
      heading: string;
      cta_button: {
        title: string;
        url: string;
      };
      about: {
        description: string;
        banner: {
          url: string;
          imgix_url: string;
        };
      };
      services: ServicesProps[];
      contacts: {
        email: string;
        phone: string;
        address: string;
        time: string;
      };
    };
  };
}

interface ServicesProps {
  image: {
    url: string;
    imgix_url: string;
  };
  description: string;
}
