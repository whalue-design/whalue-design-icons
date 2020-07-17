// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import CaretDownFilledSvg from '@whalue-design/icons-svg/lib/asn/CaretDownFilled';

export default {
  name: 'IconCaretDownFilled',
  displayName: 'CaretDownFilled',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: CaretDownFilledSvg } },
      children,
    ),
};