// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import CaretDownOutlinedSvg from '@whalue-design/icons-svg/lib/asn/CaretDownOutlined';

export default {
  name: 'IconCaretDownOutlined',
  displayName: 'CaretDownOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: CaretDownOutlinedSvg } },
      children,
    ),
};