// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import LikeTwoToneSvg from '@whalue-design/icons-svg/lib/asn/LikeTwoTone';

export default {
  name: 'IconLikeTwoTone',
  displayName: 'LikeTwoTone',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: LikeTwoToneSvg } },
      children,
    ),
};