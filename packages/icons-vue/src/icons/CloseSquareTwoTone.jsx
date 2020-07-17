// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import CloseSquareTwoToneSvg from '@whalue-design/icons-svg/lib/asn/CloseSquareTwoTone';

export default {
  name: 'IconCloseSquareTwoTone',
  displayName: 'CloseSquareTwoTone',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: CloseSquareTwoToneSvg } },
      children,
    ),
};