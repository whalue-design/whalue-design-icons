// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import MinusSquareFilledSvg from '@whalue-design/icons-svg/lib/asn/MinusSquareFilled';

export default {
  name: 'IconMinusSquareFilled',
  displayName: 'MinusSquareFilled',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: MinusSquareFilledSvg } },
      children,
    ),
};