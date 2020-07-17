// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import FilterOutlinedSvg from '@whalue-design/icons-svg/lib/asn/FilterOutlined';

export default {
  name: 'IconFilterOutlined',
  displayName: 'FilterOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: FilterOutlinedSvg } },
      children,
    ),
};