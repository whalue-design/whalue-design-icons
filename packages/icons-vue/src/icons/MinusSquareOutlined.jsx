// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import MinusSquareOutlinedSvg from '@whalue-design/icons-svg/lib/asn/MinusSquareOutlined';

export default {
  name: 'IconMinusSquareOutlined',
  displayName: 'MinusSquareOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: MinusSquareOutlinedSvg } },
      children,
    ),
};