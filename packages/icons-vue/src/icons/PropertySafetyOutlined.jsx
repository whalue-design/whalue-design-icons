// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import PropertySafetyOutlinedSvg from '@whalue-design/icons-svg/lib/asn/PropertySafetyOutlined';

export default {
  name: 'IconPropertySafetyOutlined',
  displayName: 'PropertySafetyOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: PropertySafetyOutlinedSvg } },
      children,
    ),
};