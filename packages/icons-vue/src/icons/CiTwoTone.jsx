// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import CiTwoToneSvg from '@whalue-design/icons-svg/lib/asn/CiTwoTone';

export default {
  name: 'IconCiTwoTone',
  displayName: 'CiTwoTone',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: CiTwoToneSvg } },
      children,
    ),
};