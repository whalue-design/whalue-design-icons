// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import SearchOutlinedSvg from '@whalue-design/icons-svg/lib/asn/SearchOutlined';

export default {
  name: 'IconSearchOutlined',
  displayName: 'SearchOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: SearchOutlinedSvg } },
      children,
    ),
};