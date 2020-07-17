// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import ApartmentOutlinedSvg from '@whalue-design/icons-svg/lib/asn/ApartmentOutlined';

export default {
  name: 'IconApartmentOutlined',
  displayName: 'ApartmentOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: ApartmentOutlinedSvg } },
      children,
    ),
};