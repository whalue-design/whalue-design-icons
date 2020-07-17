// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import UpSquareTwoToneSvg from '@whalue-design/icons-svg/lib/asn/UpSquareTwoTone';

export default {
  name: 'IconUpSquareTwoTone',
  displayName: 'UpSquareTwoTone',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: UpSquareTwoToneSvg } },
      children,
    ),
};