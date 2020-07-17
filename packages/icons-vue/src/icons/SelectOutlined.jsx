// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import SelectOutlinedSvg from '@whalue-design/icons-svg/lib/asn/SelectOutlined';

export default {
  name: 'IconSelectOutlined',
  displayName: 'SelectOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: SelectOutlinedSvg } },
      children,
    ),
};