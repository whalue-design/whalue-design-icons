// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import MailFilledSvg from '@whalue-design/icons-svg/lib/asn/MailFilled';

export default {
  name: 'IconMailFilled',
  displayName: 'MailFilled',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: MailFilledSvg } },
      children,
    ),
};