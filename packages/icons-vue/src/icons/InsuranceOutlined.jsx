// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import InsuranceOutlinedSvg from '@whalue-design/icons-svg/lib/asn/InsuranceOutlined';

export default {
  name: 'IconInsuranceOutlined',
  displayName: 'InsuranceOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: InsuranceOutlinedSvg } },
      children,
    ),
};