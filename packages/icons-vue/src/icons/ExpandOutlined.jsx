// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import ExpandOutlinedSvg from '@whalue-design/icons-svg/lib/asn/ExpandOutlined';

export default {
  name: 'IconExpandOutlined',
  displayName: 'ExpandOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: ExpandOutlinedSvg } },
      children,
    ),
};