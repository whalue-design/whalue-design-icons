// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import ProfileTwoToneSvg from '@whalue-design/icons-svg/lib/asn/ProfileTwoTone';

export default {
  name: 'IconProfileTwoTone',
  displayName: 'ProfileTwoTone',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: ProfileTwoToneSvg } },
      children,
    ),
};