// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import MediumSquareFilledSvg from '@whalue-design/icons-svg/lib/asn/MediumSquareFilled';

export default {
  name: 'IconMediumSquareFilled',
  displayName: 'MediumSquareFilled',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: MediumSquareFilledSvg } },
      children,
    ),
};