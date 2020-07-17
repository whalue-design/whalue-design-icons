// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import DeliveredProcedureOutlinedSvg from '@whalue-design/icons-svg/lib/asn/DeliveredProcedureOutlined';

export default {
  name: 'IconDeliveredProcedureOutlined',
  displayName: 'DeliveredProcedureOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: DeliveredProcedureOutlinedSvg } },
      children,
    ),
};