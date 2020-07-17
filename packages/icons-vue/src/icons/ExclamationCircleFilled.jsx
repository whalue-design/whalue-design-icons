// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import ExclamationCircleFilledSvg from '@whalue-design/icons-svg/lib/asn/ExclamationCircleFilled';

export default {
  name: 'IconExclamationCircleFilled',
  displayName: 'ExclamationCircleFilled',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: ExclamationCircleFilledSvg } },
      children,
    ),
};