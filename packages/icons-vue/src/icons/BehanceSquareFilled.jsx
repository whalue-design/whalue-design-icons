// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import BehanceSquareFilledSvg from '@whalue-design/icons-svg/lib/asn/BehanceSquareFilled';

export default {
  name: 'IconBehanceSquareFilled',
  displayName: 'BehanceSquareFilled',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: BehanceSquareFilledSvg } },
      children,
    ),
};