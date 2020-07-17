// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import PlusCircleFilledSvg from '@whalue-design/icons-svg/lib/asn/PlusCircleFilled';

export default {
  name: 'IconPlusCircleFilled',
  displayName: 'PlusCircleFilled',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: PlusCircleFilledSvg } },
      children,
    ),
};