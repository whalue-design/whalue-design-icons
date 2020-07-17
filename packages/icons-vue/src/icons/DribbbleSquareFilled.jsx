// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import DribbbleSquareFilledSvg from '@whalue-design/icons-svg/lib/asn/DribbbleSquareFilled';

export default {
  name: 'IconDribbbleSquareFilled',
  displayName: 'DribbbleSquareFilled',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: DribbbleSquareFilledSvg } },
      children,
    ),
};