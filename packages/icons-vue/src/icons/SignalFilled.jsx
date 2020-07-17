// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import SignalFilledSvg from '@whalue-design/icons-svg/lib/asn/SignalFilled';

export default {
  name: 'IconSignalFilled',
  displayName: 'SignalFilled',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: SignalFilledSvg } },
      children,
    ),
};