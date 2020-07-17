// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import EyeTwoToneSvg from '@whalue-design/icons-svg/lib/asn/EyeTwoTone';

export default {
  name: 'IconEyeTwoTone',
  displayName: 'EyeTwoTone',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: EyeTwoToneSvg } },
      children,
    ),
};