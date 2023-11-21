import type { Schema, Attribute } from '@strapi/strapi';

export interface AtomsCard extends Schema.Component {
  collectionName: 'components_atoms_cards';
  info: {
    displayName: 'card';
    icon: 'id-card';
    description: '';
  };
  attributes: {
    image: Attribute.Media;
    title: Attribute.Text;
    description: Attribute.Text;
    icon: Attribute.Media;
    sub_title: Attribute.String;
    image_mobile: Attribute.Media;
    cta_title: Attribute.String;
    cta_link: Attribute.String;
    date: Attribute.Date;
  };
}

export interface AtomsFaq extends Schema.Component {
  collectionName: 'components_atoms_faqs';
  info: {
    displayName: 'faq';
    icon: 'question';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'rich';
        }
      >;
    media: Attribute.Media;
    media_mob: Attribute.Media;
    button: Attribute.Component<'atoms.link'>;
  };
}

export interface AtomsFiles extends Schema.Component {
  collectionName: 'components_atoms_files';
  info: {
    displayName: 'files';
    icon: 'file-alt';
    description: '';
  };
  attributes: {
    file_name: Attribute.Text;
    file: Attribute.Media;
    title: Attribute.String;
    description: Attribute.RichText;
  };
}

export interface AtomsFooterColumn1 extends Schema.Component {
  collectionName: 'components_atoms_footer_column_1s';
  info: {
    displayName: 'Footer Column 1';
    icon: 'arrows-alt';
  };
  attributes: {
    logo: Attribute.Media;
    footerContent: Attribute.Text;
    socialLinks: Attribute.Component<'atoms.social-link', true>;
    icon: Attribute.Media;
    helpText: Attribute.Text;
    contact: Attribute.String;
    whatsapp: Attribute.Component<'atoms.link'>;
  };
}

export interface AtomsFooterColumn2 extends Schema.Component {
  collectionName: 'components_atoms_footer_column_2s';
  info: {
    displayName: 'Footer Column 2';
    icon: 'columns';
  };
  attributes: {
    parent: Attribute.String;
    child: Attribute.Component<'atoms.link', true>;
  };
}

export interface AtomsFooterColumn3 extends Schema.Component {
  collectionName: 'components_atoms_footer_column_3s';
  info: {
    displayName: 'Footer Column 3';
    icon: 'archive';
    description: '';
  };
  attributes: {
    parent: Attribute.String;
    child: Attribute.Component<'atoms.link', true>;
    title: Attribute.String;
    button: Attribute.Component<'atoms.link'>;
    content: Attribute.Text;
    author: Attribute.String;
  };
}

export interface AtomsLink extends Schema.Component {
  collectionName: 'components_links_links';
  info: {
    displayName: 'Link';
    icon: 'external-link-alt';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    link: Attribute.Text &
      Attribute.SetMinMaxLength<{
        maxLength: 20000;
      }>;
    classname: Attribute.String;
    icon: Attribute.Media;
    media: Attribute.Media;
    media_mobile: Attribute.Media;
  };
}

export interface AtomsLogoTagline extends Schema.Component {
  collectionName: 'components_atoms_logo_taglines';
  info: {
    displayName: 'LogoTagline';
    icon: 'file-image';
  };
  attributes: {
    logo: Attribute.Media;
    tagline: Attribute.Text;
  };
}

export interface AtomsMegaMenu extends Schema.Component {
  collectionName: 'components_atoms_mega_menus';
  info: {
    displayName: 'Mega Menu';
    icon: 'dumbbell';
  };
  attributes: {
    title: Attribute.String;
    link: Attribute.String;
    subMenu: Attribute.Component<'atoms.sub-menu', true>;
  };
}

export interface AtomsMenu extends Schema.Component {
  collectionName: 'components_atoms_menus';
  info: {
    displayName: 'Menu';
    icon: 'clipboard-list';
  };
  attributes: {
    title: Attribute.String;
    link: Attribute.String;
    target: Attribute.Enumeration<['_blank']>;
    sub_menu: Attribute.Component<'atoms.link', true>;
  };
}

export interface AtomsMetaFields extends Schema.Component {
  collectionName: 'components_seo_meta_fields';
  info: {
    displayName: 'Meta Fields';
    icon: 'globe-africa';
    description: '';
  };
  attributes: {
    metaTitle: Attribute.String;
    metaDiscription: Attribute.Text;
    keyword: Attribute.String;
    breadCrumbSchema: Attribute.JSON;
    siteNavigationSchema: Attribute.JSON;
    webPageSchema: Attribute.JSON;
    organisationSchema: Attribute.JSON;
    faqSchema: Attribute.JSON;
    financialProductSchema: Attribute.JSON;
  };
}

export interface AtomsPointers extends Schema.Component {
  collectionName: 'components_atoms_pointers';
  info: {
    displayName: 'Pointers';
    icon: 'hand-pointer';
  };
  attributes: {
    pointer_text: Attribute.Text;
    sub_pointer_text: Attribute.RichText;
  };
}

export interface AtomsRowText extends Schema.Component {
  collectionName: 'components_atoms_row_text';
  info: {
    displayName: 'Row Text';
    icon: 'search-dollar';
    description: '';
  };
  attributes: {
    title: Attribute.Text;
    value: Attribute.Text;
  };
}

export interface AtomsSearchText extends Schema.Component {
  collectionName: 'components_atoms_search_texts';
  info: {
    displayName: 'Search Text';
    icon: 'search-dollar';
    description: '';
  };
  attributes: {
    text: Attribute.Text;
    link: Attribute.String;
  };
}

export interface AtomsSectionWithBg extends Schema.Component {
  collectionName: 'components_atoms_section_with_bgs';
  info: {
    displayName: 'Section with BG';
    icon: 'image';
    description: '';
  };
  attributes: {
    desktop_banner: Attribute.Media;
    mobile_banner: Attribute.Media;
    title: Attribute.Text;
    description: Attribute.Text;
    button: Attribute.Component<'atoms.link'>;
  };
}

export interface AtomsSectionWithContent extends Schema.Component {
  collectionName: 'components_atoms_section_with_contents';
  info: {
    displayName: 'Section with Content';
    icon: 'envelope-open-text';
    description: '';
  };
  attributes: {
    content: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'rich';
        }
      >;
    image: Attribute.Media;
    mobile_image: Attribute.Media;
  };
}

export interface AtomsSocialLink extends Schema.Component {
  collectionName: 'components_social_link_social_links';
  info: {
    displayName: 'Social Link';
    icon: 'globe';
    description: '';
  };
  attributes: {
    social_name: Attribute.String;
    link: Attribute.String;
  };
}

export interface AtomsSubMenu extends Schema.Component {
  collectionName: 'components_atoms_sub_menus';
  info: {
    displayName: 'Sub Menu';
    icon: 'bacon';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    link: Attribute.String;
    icon: Attribute.Media;
    media: Attribute.Media;
    media_mobile: Attribute.Media;
  };
}

export interface AtomsTab extends Schema.Component {
  collectionName: 'components_atoms_tabs';
  info: {
    displayName: 'tab';
    icon: 'adjust';
    description: '';
  };
  attributes: {
    image: Attribute.Media;
    title: Attribute.Text;
    description: Attribute.Text;
    mobImage: Attribute.Media;
  };
}

export interface AtomsTextValue extends Schema.Component {
  collectionName: 'components_atoms_text_value';
  info: {
    displayName: 'Text Value';
    icon: 'search-dollar';
    description: '';
  };
  attributes: {
    title: Attribute.Text;
  };
}

export interface MoleculesFooter extends Schema.Component {
  collectionName: 'components_molecules_footers';
  info: {
    displayName: 'Footer';
    icon: 'football-ball';
  };
  attributes: {
    footerColumn1: Attribute.Component<'atoms.footer-column-1'>;
    footerColumn2: Attribute.Component<'atoms.footer-column-2', true>;
    footerColumn3: Attribute.Component<'atoms.footer-column-3'>;
    copyright: Attribute.Text;
    footLinks: Attribute.Component<'atoms.link', true>;
  };
}

export interface MoleculesHeader extends Schema.Component {
  collectionName: 'components_molecules_headers';
  info: {
    displayName: 'Header';
    icon: 'headphones';
    description: '';
  };
  attributes: {
    logo: Attribute.Media;
    megamenu: Attribute.Component<'atoms.mega-menu', true>;
    button: Attribute.Component<'atoms.link'>;
  };
}

export interface MoleculesHero extends Schema.Component {
  collectionName: 'components_molecules_heroes';
  info: {
    displayName: 'Hero';
    icon: 'heading';
    description: '';
  };
  attributes: {
    title: Attribute.Text;
    description: Attribute.RichText;
    button: Attribute.Component<'atoms.link'>;
    desktop_banner: Attribute.Media;
    mobile_banner: Attribute.Media;
    subtitle: Attribute.String;
  };
}

export interface MoleculesSection extends Schema.Component {
  collectionName: 'components_molecules_sections';
  info: {
    displayName: 'section';
    description: '';
  };
  attributes: {
    cta: Attribute.Component<'atoms.link'>;
    sliders: Attribute.Component<'atoms.files', true>;
    desktop_banner: Attribute.Component<'atoms.files'>;
    mobile_banner: Attribute.Component<'atoms.files'>;
    dynamic_titles: Attribute.Component<'atoms.text-value', true>;
    title: Attribute.String;
    subTitle: Attribute.String;
  };
}

export interface MoleculesSocial extends Schema.Component {
  collectionName: 'components_molecules_socials';
  info: {
    displayName: 'Social';
    icon: 'globe-americas';
  };
  attributes: {
    title: Attribute.String;
    social: Attribute.Component<'atoms.social-link', true>;
  };
}

export interface TemplatesLanding extends Schema.Component {
  collectionName: 'components_templates_landings';
  info: {
    displayName: 'Landing';
    description: '';
  };
  attributes: {
    sections: Attribute.Component<'molecules.section', true>;
  };
}

declare module '@strapi/strapi' {
  export module Shared {
    export interface Components {
      'atoms.card': AtomsCard;
      'atoms.faq': AtomsFaq;
      'atoms.files': AtomsFiles;
      'atoms.footer-column-1': AtomsFooterColumn1;
      'atoms.footer-column-2': AtomsFooterColumn2;
      'atoms.footer-column-3': AtomsFooterColumn3;
      'atoms.link': AtomsLink;
      'atoms.logo-tagline': AtomsLogoTagline;
      'atoms.mega-menu': AtomsMegaMenu;
      'atoms.menu': AtomsMenu;
      'atoms.meta-fields': AtomsMetaFields;
      'atoms.pointers': AtomsPointers;
      'atoms.row-text': AtomsRowText;
      'atoms.search-text': AtomsSearchText;
      'atoms.section-with-bg': AtomsSectionWithBg;
      'atoms.section-with-content': AtomsSectionWithContent;
      'atoms.social-link': AtomsSocialLink;
      'atoms.sub-menu': AtomsSubMenu;
      'atoms.tab': AtomsTab;
      'atoms.text-value': AtomsTextValue;
      'molecules.footer': MoleculesFooter;
      'molecules.header': MoleculesHeader;
      'molecules.hero': MoleculesHero;
      'molecules.section': MoleculesSection;
      'molecules.social': MoleculesSocial;
      'templates.landing': TemplatesLanding;
    }
  }
}
