// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import ExclamationCircleTwoToneSvg from '@whalue-design/icons-svg/lib/asn/ExclamationCircleTwoTone';

export default {
  name: 'IconExclamationCircleTwoTone',
  displayName: 'ExclamationCircleTwoTone',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: ExclamationCircleTwoToneSvg } },
      children,
    ),
};