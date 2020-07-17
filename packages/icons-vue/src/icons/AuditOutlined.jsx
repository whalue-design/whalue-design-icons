// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import AuditOutlinedSvg from '@whalue-design/icons-svg/lib/asn/AuditOutlined';

export default {
  name: 'IconAuditOutlined',
  displayName: 'AuditOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: AuditOutlinedSvg } },
      children,
    ),
};