// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import ExclamationOutlinedSvg from '@whalue-design/icons-svg/lib/asn/ExclamationOutlined';

export default {
  name: 'IconExclamationOutlined',
  displayName: 'ExclamationOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: ExclamationOutlinedSvg } },
      children,
    ),
};