// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import CiCircleTwoToneSvg from '@whalue-design/icons-svg/lib/asn/CiCircleTwoTone';

export default {
  name: 'IconCiCircleTwoTone',
  displayName: 'CiCircleTwoTone',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: CiCircleTwoToneSvg } },
      children,
    ),
};