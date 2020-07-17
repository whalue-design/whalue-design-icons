// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import StopOutlinedSvg from '@whalue-design/icons-svg/lib/asn/StopOutlined';

export default {
  name: 'IconStopOutlined',
  displayName: 'StopOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: StopOutlinedSvg } },
      children,
    ),
};