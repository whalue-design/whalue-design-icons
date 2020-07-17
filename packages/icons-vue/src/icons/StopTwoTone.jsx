// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import StopTwoToneSvg from '@whalue-design/icons-svg/lib/asn/StopTwoTone';

export default {
  name: 'IconStopTwoTone',
  displayName: 'StopTwoTone',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: StopTwoToneSvg } },
      children,
    ),
};