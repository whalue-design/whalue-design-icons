// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import ContactsOutlinedSvg from '@whalue-design/icons-svg/lib/asn/ContactsOutlined';

export default {
  name: 'IconContactsOutlined',
  displayName: 'ContactsOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: ContactsOutlinedSvg } },
      children,
    ),
};