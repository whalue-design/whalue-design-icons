// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import UnorderedListOutlinedSvg from '@whalue-design/icons-svg/lib/asn/UnorderedListOutlined';

export default {
  name: 'IconUnorderedListOutlined',
  displayName: 'UnorderedListOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: UnorderedListOutlinedSvg } },
      children,
    ),
};