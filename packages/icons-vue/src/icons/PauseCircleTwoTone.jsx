// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import PauseCircleTwoToneSvg from '@whalue-design/icons-svg/lib/asn/PauseCircleTwoTone';

export default {
  name: 'IconPauseCircleTwoTone',
  displayName: 'PauseCircleTwoTone',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: PauseCircleTwoToneSvg } },
      children,
    ),
};