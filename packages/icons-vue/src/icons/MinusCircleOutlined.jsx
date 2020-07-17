// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import MinusCircleOutlinedSvg from '@whalue-design/icons-svg/lib/asn/MinusCircleOutlined';

export default {
  name: 'IconMinusCircleOutlined',
  displayName: 'MinusCircleOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: MinusCircleOutlinedSvg } },
      children,
    ),
};