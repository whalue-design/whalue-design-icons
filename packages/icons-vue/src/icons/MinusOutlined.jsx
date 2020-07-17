// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import MinusOutlinedSvg from '@whalue-design/icons-svg/lib/asn/MinusOutlined';

export default {
  name: 'IconMinusOutlined',
  displayName: 'MinusOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: MinusOutlinedSvg } },
      children,
    ),
};