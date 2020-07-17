// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import CloseCircleTwoToneSvg from '@whalue-design/icons-svg/lib/asn/CloseCircleTwoTone';

export default {
  name: 'IconCloseCircleTwoTone',
  displayName: 'CloseCircleTwoTone',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: CloseCircleTwoToneSvg } },
      children,
    ),
};