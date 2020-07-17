// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import MinusCircleFilledSvg from '@whalue-design/icons-svg/lib/asn/MinusCircleFilled';

export default {
  name: 'IconMinusCircleFilled',
  displayName: 'MinusCircleFilled',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: MinusCircleFilledSvg } },
      children,
    ),
};