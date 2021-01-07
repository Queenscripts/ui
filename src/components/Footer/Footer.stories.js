import React from 'react';

import markdown from './README.mdx';

import Footer from '.';
import Link from '../Link';

export default {
  title: 'Components/UI Elements/Footer',
  component: Footer,
  parameters: {
    componentSubtitle: 'Component',
    status: 'released',
    mdx: markdown,
  },
};

export const Regular = (args) => {
  return (
    <Footer {...args}>
      {!args.external ? (
        <div className="wfp--footer__info">
          <div className="wfp--footer__info__item">
            <p className="wfp--footer__label">A label</p>
            <ul className="wfp--footer__list">
              <li>
                <Link href="http://www.wfp.org">First Link</Link>
              </li>
              <li>
                <Link href="http://www.wfp.org">Second Link</Link>
              </li>
            </ul>
          </div>
          <div className="wfp--footer__info__item">
            <p className="wfp--footer__label">Another label</p>
            <ul className="wfp--footer__list">
              <li>
                <Link href="http://www.wfp.org">First Link</Link>
              </li>
              <li>
                <Link href="http://www.wfp.org">Second Link</Link>
              </li>
            </ul>
          </div>
        </div>
      ) : (
        <div>
          The United Nations World Food Programme - saving lives in emergencies
          and changing lives for millions through sustainable development. WFP
          works in more than 80 countries around the world, feeding people
          caught in conflict and disasters, and laying the foundations for a
          better future.
          <br />
          <Link href="http://www.wfp.org">Custom Links</Link>
        </div>
      )}
    </Footer>
  );
};

Regular.args = {
  external: false,
};

export const External = (args) => (
  <Footer
    {...args}
    secondary={
      <div>
        Via C. G. Viola 68 Parco dei Medici
        <br />
        00148 Rome, Italy
      </div>
    }>
    <div>
      The United Nations World Food Programme is the 2020 Nobel Peace Prize Laureate. 
      We are the world's largest humanitarian organization, 
      saving lives in emergencies and using food assistance to build a pathway to peace, 
      stability and prosperity for people recovering from conflict, disasters
      <br />
      <Link href="http://www.wfp.org">Custom Links</Link>
    </div>
  </Footer>
);

External.args = {
  metaContent: '2019 © World Food Programme',
  external: true,
};

External.story = {
  parameters: {
    docs: {
      storyDescription:
        'External Footer is used for external applications facing the public audience. It should contain WFP logo, HQ address and metadata like copyright.',
    },
  },
};

export const Internal = (args) => (
  <Footer {...args}>
    <div className="wfp--footer__info">
      <div className="wfp--footer__info__item">
        <p className="wfp--footer__label">A label</p>
        <ul className="wfp--footer__list">
          <li>
            <Link href="http://www.wfp.org">First Link</Link>
          </li>
          <li>
            <Link href="http://www.wfp.org">Second Link</Link>
          </li>
        </ul>
      </div>
      <div className="wfp--footer__info__item">
        <p className="wfp--footer__label">Another label</p>
        <ul className="wfp--footer__list">
          <li>
            <Link href="http://www.wfp.org">First Link</Link>
          </li>
          <li>
            <Link href="http://www.wfp.org">Second Link</Link>
          </li>
        </ul>
      </div>
    </div>
  </Footer>
);

// Internal.args = {
//   metaContent: '2019 © World Food Programme',
//   external: true,
// };
Internal.story = {
  parameters: {
    docs: {
      storyDescription:
        'Internal Footer is used in applications that are for internal purposes and not available for external users. In the left section you can add links',
    },
  },
};

export const OverrideLogos = (args) => (
  <Footer
    {...args}
    logo={<div>Logo</div>}
    logoExtended={<div>LogoExtended</div>}
    sdgLogo={<div>SdgLogo</div>}>
    <div className="wfp--footer__info">
      <div className="wfp--footer__info__item">
        <p className="wfp--footer__label">A label</p>
        <ul className="wfp--footer__list">
          <li>
            <Link href="http://www.wfp.org">First Link</Link>
          </li>
          <li>
            <Link href="http://www.wfp.org">Second Link</Link>
          </li>
        </ul>
      </div>
      <div className="wfp--footer__info__item">
        <p className="wfp--footer__label">Another label</p>
        <ul className="wfp--footer__list">
          <li>
            <Link href="http://www.wfp.org">First Link</Link>
          </li>
          <li>
            <Link href="http://www.wfp.org">Second Link</Link>
          </li>
        </ul>
      </div>
    </div>
  </Footer>
);

OverrideLogos.story = {
  parameters: {
    docs: {
      storyDescription:
        'The logos for `logo`, `logoExtended` or `sdgLogo`  can be replaced by a custom react component.',
    },
  },
};
