// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import UpSquareFilledSvg from '@whalue-design/icons-svg/lib/asn/UpSquareFilled';

export default {
  name: 'IconUpSquareFilled',
  displayName: 'UpSquareFilled',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: UpSquareFilledSvg } },
      children,
    ),
};