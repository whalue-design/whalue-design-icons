// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import MailOutlinedSvg from '@whalue-design/icons-svg/lib/asn/MailOutlined';

export default {
  name: 'IconMailOutlined',
  displayName: 'MailOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: MailOutlinedSvg } },
      children,
    ),
};