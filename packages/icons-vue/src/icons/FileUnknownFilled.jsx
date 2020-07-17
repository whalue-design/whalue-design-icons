// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import FileUnknownFilledSvg from '@whalue-design/icons-svg/lib/asn/FileUnknownFilled';

export default {
  name: 'IconFileUnknownFilled',
  displayName: 'FileUnknownFilled',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: FileUnknownFilledSvg } },
      children,
    ),
};