// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import ReconciliationOutlinedSvg from '@whalue-design/icons-svg/lib/asn/ReconciliationOutlined';

export default {
  name: 'IconReconciliationOutlined',
  displayName: 'ReconciliationOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: ReconciliationOutlinedSvg } },
      children,
    ),
};