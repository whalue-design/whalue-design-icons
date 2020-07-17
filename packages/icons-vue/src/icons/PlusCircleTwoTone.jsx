// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import PlusCircleTwoToneSvg from '@whalue-design/icons-svg/lib/asn/PlusCircleTwoTone';

export default {
  name: 'IconPlusCircleTwoTone',
  displayName: 'PlusCircleTwoTone',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: PlusCircleTwoToneSvg } },
      children,
    ),
};