// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import FileTextFilledSvg from '@whalue-design/icons-svg/lib/asn/FileTextFilled';

export default {
  name: 'IconFileTextFilled',
  displayName: 'FileTextFilled',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: FileTextFilledSvg } },
      children,
    ),
};