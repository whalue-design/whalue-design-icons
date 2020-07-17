// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import ExclamationCircleOutlinedSvg from '@whalue-design/icons-svg/lib/asn/ExclamationCircleOutlined';

export default {
  name: 'IconExclamationCircleOutlined',
  displayName: 'ExclamationCircleOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: ExclamationCircleOutlinedSvg } },
      children,
    ),
};