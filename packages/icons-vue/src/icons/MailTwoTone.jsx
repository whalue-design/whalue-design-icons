// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import MailTwoToneSvg from '@whalue-design/icons-svg/lib/asn/MailTwoTone';

export default {
  name: 'IconMailTwoTone',
  displayName: 'MailTwoTone',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: MailTwoToneSvg } },
      children,
    ),
};