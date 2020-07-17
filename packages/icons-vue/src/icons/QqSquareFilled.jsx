// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import QqSquareFilledSvg from '@whalue-design/icons-svg/lib/asn/QqSquareFilled';

export default {
  name: 'IconQqSquareFilled',
  displayName: 'QqSquareFilled',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: QqSquareFilledSvg } },
      children,
    ),
};