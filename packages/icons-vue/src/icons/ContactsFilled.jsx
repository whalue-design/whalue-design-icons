// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import ContactsFilledSvg from '@whalue-design/icons-svg/lib/asn/ContactsFilled';

export default {
  name: 'IconContactsFilled',
  displayName: 'ContactsFilled',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: ContactsFilledSvg } },
      children,
    ),
};